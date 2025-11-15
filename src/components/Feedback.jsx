import { useState } from 'react'
import { FaStar, FaPaperPlane, FaUser, FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Sample recent feedback data
  const recentFeedback = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'EcoSprinkle has completely transformed how I manage my garden watering. The smart scheduling saves so much water!',
      date: '2 days ago',
      category: 'general'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 4,
      comment: 'Great app! The interface is intuitive and the water usage reports are very helpful. Would love to see more customization options.',
      date: '3 days ago',
      category: 'feature'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'As an environmental science teacher, I recommend this to all my students. The ecological impact tracking is fantastic!',
      date: '1 week ago',
      category: 'general'
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', rating: 5, category: 'general', message: '' })
      } else {
        console.error('Failed to submit feedback')
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Calculate average rating
  const averageRating = recentFeedback.reduce((acc, feedback) => acc + feedback.rating, 0) / recentFeedback.length

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <FaStar />
            <span className="font-semibold">Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your feedback helps us improve EcoSprinkle and make it even better
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-gray-600">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <FaStar
                            className={`text-3xl ${
                              star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                            } hover:scale-110 transition-transform`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="general">General Feedback</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="question">Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Share your thoughts, suggestions, or report an issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <FaPaperPlane />
                  <span>Submit Feedback</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Recent Feedback & Ratings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Overall Rating Summary */}
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Feedback</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-5xl font-bold text-primary">{averageRating.toFixed(1)}</div>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`text-xl ${
                          star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Based on {recentFeedback.length} reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Feedback List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Feedback</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                {recentFeedback.map((feedback, index) => (
                  <motion.div
                    key={feedback.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FaUser className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feedback.name}</h4>
                          <p className="text-sm text-gray-500">{feedback.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`text-sm ${
                              star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <FaQuoteLeft className="text-primary/20 text-lg mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{feedback.comment}</p>
                    </div>
                    <div className="mt-3">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {feedback.category.charAt(0).toUpperCase() + feedback.category.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Feedback