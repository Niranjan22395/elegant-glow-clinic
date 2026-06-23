import nodemailer from 'nodemailer';
import { IAppointment } from '../models/Appointment';
import { IContact } from '../models/Contact';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send appointment confirmation email
export const sendAppointmentEmail = async (appointment: IAppointment): Promise<void> => {
  try {
    const transporter = createTransporter();

    // Email to customer
    const customerMailOptions = {
      from: `"Elegant Glow Aesthetic Clinic" <${process.env.EMAIL_USER}>`,
      to: appointment.email,
      subject: 'Appointment Confirmation - Elegant Glow Aesthetic Clinic',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C9A96E 0%, #D4AF37 100%); color: white; padding: 30px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .details { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #C9A96E; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .button { display: inline-block; padding: 12px 30px; background: #C9A96E; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Appointment Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear ${appointment.name},</p>
              <p>Thank you for booking an appointment with Elegant Glow Aesthetic Clinic. Your appointment has been confirmed.</p>
              
              <div class="details">
                <h3>Appointment Details:</h3>
                <p><strong>Service:</strong> ${appointment.service}</p>
                <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                <p><strong>Status:</strong> ${appointment.status.toUpperCase()}</p>
                ${appointment.message ? `<p><strong>Your Message:</strong> ${appointment.message}</p>` : ''}
              </div>

              <p>We look forward to seeing you! If you need to reschedule or have any questions, please contact us.</p>
              
              <center>
                <a href="tel:+917488172473" class="button">Call Us: +91 7488172473</a>
              </center>
            </div>
            <div class="footer">
              <p><strong>Elegant Glow Aesthetic Clinic</strong></p>
              <p>New Road Phusro, Near Vishal Mega Mart, Bokaro</p>
              <p>Email: sagar007cena@gmail.com | Phone: +91 7488172473</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to admin
    const adminMailOptions = {
      from: `"Elegant Glow Aesthetic Clinic" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'sagar007cena@gmail.com',
      subject: 'New Appointment Booking',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #C9A96E; color: white; padding: 20px; }
            .content { padding: 20px; }
            .details { background: #f9f9f9; padding: 15px; margin: 15px 0; border-left: 4px solid #C9A96E; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Appointment Booking</h2>
            </div>
            <div class="content">
              <div class="details">
                <p><strong>Customer Name:</strong> ${appointment.name}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Service:</strong> ${appointment.service}</p>
                <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString('en-IN')}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                ${appointment.message ? `<p><strong>Message:</strong> ${appointment.message}</p>` : ''}
              </div>
              <p>Please confirm this appointment as soon as possible.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    console.log('✅ Appointment emails sent successfully');
  } catch (error) {
    console.error('❌ Error sending appointment email:', error);
    // Don't throw error - appointment should still be created even if email fails
  }
};

// Send contact form email
export const sendContactEmail = async (contact: IContact): Promise<void> => {
  try {
    const transporter = createTransporter();

    // Email to customer (auto-reply)
    const customerMailOptions = {
      from: `"Elegant Glow Aesthetic Clinic" <${process.env.EMAIL_USER}>`,
      to: contact.email,
      subject: 'We received your message - Elegant Glow Aesthetic Clinic',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #C9A96E 0%, #D4AF37 100%); color: white; padding: 30px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${contact.name},</p>
              <p>We have received your message and will get back to you within 24 hours.</p>
              <p><strong>Your Message:</strong></p>
              <p style="background: white; padding: 15px; border-left: 4px solid #C9A96E;">${contact.message}</p>
              <p>If you need immediate assistance, please call us at +91 7488172473.</p>
            </div>
            <div class="footer">
              <p><strong>Elegant Glow Aesthetic Clinic</strong></p>
              <p>New Road Phusro, Near Vishal Mega Mart, Bokaro</p>
              <p>Email: sagar007cena@gmail.com | Phone: +91 7488172473</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to admin
    const adminMailOptions = {
      from: `"Elegant Glow Aesthetic Clinic" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'sagar007cena@gmail.com',
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #C9A96E; color: white; padding: 20px; }
            .content { padding: 20px; }
            .details { background: #f9f9f9; padding: 15px; margin: 15px 0; border-left: 4px solid #C9A96E; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="details">
                <p><strong>Name:</strong> ${contact.name}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Phone:</strong> ${contact.phone}</p>
                <p><strong>Subject:</strong> ${contact.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${contact.message}</p>
              </div>
              <p>Please respond to this inquiry as soon as possible.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(adminMailOptions);

    console.log('✅ Contact emails sent successfully');
  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    // Don't throw error - contact should still be saved even if email fails
  }
};

// Made with Bob
