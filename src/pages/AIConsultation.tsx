import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface ConsultationResult {
  skinType: string;
  concerns: string[];
  recommendations: string[];
  suggestedTreatments: string[];
  confidence: number;
}

export default function AIConsultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    skinConcerns: [] as string[],
    medicalHistory: '',
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ConsultationResult | null>(null);

  const skinConcernOptions = [
    'Acne',
    'Dark Spots',
    'Wrinkles',
    'Fine Lines',
    'Pigmentation',
    'Dull Skin',
    'Large Pores',
    'Uneven Texture',
    'Redness',
    'Dryness',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleConcern = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      skinConcerns: prev.skinConcerns.includes(concern)
        ? prev.skinConcerns.filter((c) => c !== concern)
        : [...prev.skinConcerns, concern],
    }));
  };

  const analyzeImage = async () => {
    setAnalyzing(true);

    // Simulate AI analysis (In production, this would call your AI API)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock AI result
    const mockResult: ConsultationResult = {
      skinType: 'Combination',
      concerns: formData.skinConcerns.length > 0 ? formData.skinConcerns : ['Acne', 'Dark Spots'],
      recommendations: [
        'Use a gentle cleanser twice daily',
        'Apply sunscreen with SPF 30+ every morning',
        'Use a vitamin C serum for brightening',
        'Consider retinol for anti-aging benefits',
        'Stay hydrated and maintain a healthy diet',
      ],
      suggestedTreatments: [
        'Chemical Peel - For skin rejuvenation and texture improvement',
        'Laser Treatment - For pigmentation and dark spots',
        'Microneedling - For acne scars and skin texture',
        'HydraFacial - For deep cleansing and hydration',
      ],
      confidence: 87,
    };

    setResult(mockResult);
    setAnalyzing(false);
    setStep(4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      analyzeImage();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-gold-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Skin Consultation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get personalized skin care recommendations powered by artificial intelligence
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    s <= step
                      ? 'bg-gold-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {s < step ? <FiCheckCircle /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-16 h-1 ${
                      s < step ? 'bg-gold-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Personal Info</span>
            <span>Skin Concerns</span>
            <span>Upload Photo</span>
            <span>Results</span>
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Personal Information
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="100"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Skin Concerns */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Select Your Skin Concerns
                </h2>
                <p className="text-gray-600 mb-4">
                  Choose all that apply (select at least one)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skinConcernOptions.map((concern) => (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => toggleConcern(concern)}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.skinConcerns.includes(concern)
                          ? 'border-gold-600 bg-gold-50 text-gold-900'
                          : 'border-gray-200 hover:border-gold-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{concern}</span>
                        {formData.skinConcerns.includes(concern) && (
                          <FiCheckCircle className="text-gold-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical History (Optional)
                  </label>
                  <textarea
                    value={formData.medicalHistory}
                    onChange={(e) =>
                      setFormData({ ...formData, medicalHistory: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Any allergies, medications, or skin conditions..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Upload Photo */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Upload Your Photo
                </h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {imagePreview ? (
                    <div className="space-y-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-md mx-auto rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedImage(null);
                          setImagePreview('');
                        }}
                        className="text-gold-600 hover:text-gold-700 font-medium"
                      >
                        Change Photo
                      </button>
                    </div>
                  ) : (
                    <div>
                      <FiUpload className="mx-auto text-gray-400 mb-4" size={48} />
                      <p className="text-gray-600 mb-4">
                        Upload a clear photo of your face in good lighting
                      </p>
                      <label className="inline-block px-6 py-3 bg-gold-600 text-white rounded-lg cursor-pointer hover:bg-gold-700 transition-colors">
                        Choose Photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  )}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <FiAlertCircle className="text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-1">Tips for best results:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Use natural lighting</li>
                        <li>Face the camera directly</li>
                        <li>Remove makeup if possible</li>
                        <li>Ensure your face is clearly visible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {step === 4 && result && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FiCheckCircle className="text-green-600" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Analysis Complete!
                  </h2>
                  <p className="text-gray-600">
                    Confidence Score: {result.confidence}%
                  </p>
                </div>

                {/* Skin Type */}
                <div className="bg-gold-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Your Skin Type</h3>
                  <p className="text-lg text-gold-900">{result.skinType}</p>
                </div>

                {/* Detected Concerns */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Detected Concerns</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.concerns.map((concern) => (
                      <span
                        key={concern}
                        className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium"
                      >
                        {concern}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Recommendations</h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex gap-3">
                        <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggested Treatments */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">
                    Suggested Treatments
                  </h3>
                  <div className="space-y-3">
                    {result.suggestedTreatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg hover:border-gold-500 transition-colors"
                      >
                        <p className="text-gray-900">{treatment}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="mb-4">
                    Book a consultation with our experts to discuss your personalized
                    treatment plan
                  </p>
                  <button
                    type="button"
                    onClick={() => (window.location.href = '/appointment')}
                    className="px-8 py-3 bg-white text-gold-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={
                    analyzing ||
                    (step === 2 && formData.skinConcerns.length === 0) ||
                    (step === 3 && !selectedImage)
                  }
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {analyzing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analyzing...
                    </span>
                  ) : step === 3 ? (
                    'Analyze'
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            )}
          </form>
        </motion.div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            * This AI consultation is for informational purposes only and does not
            replace professional medical advice. Please consult with our doctors for
            accurate diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
