'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim()) {
      setMessage('Please enter a prompt')
      setMessageType('error')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate presentation')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `presentation-${Date.now()}.pptx`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      setMessage('PowerPoint generated successfully! 🎉')
      setMessageType('success')
      setPrompt('')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'An error occurred')
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>✨ PowerPoint Generator</h1>
          <p className={styles.subtitle}>Create beautiful presentations from text using AI</p>
          <div className={styles.badge}>100% Free • No Login • Runs Locally</div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="prompt" className={styles.label}>
              Enter Your Presentation Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create a presentation about machine learning with 5 slides, each slide should have a title and bullet points..."
              className={styles.textarea}
              rows={5}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Generating... (This may take 30-60 seconds)
              </>
            ) : (
              <>📊 Generate PowerPoint</>
            )}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className={`${styles.message} ${styles[messageType]}`}>
            {message}
          </div>
        )}

        {/* Info Section */}
        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>💡 How It Works</h3>
          <ul className={styles.infoList}>
            <li>✅ Describe what you want in your presentation</li>
            <li>✅ AI generates structured content automatically</li>
            <li>✅ Download as a ready-to-use PowerPoint file</li>
            <li>✅ No internet required • No tracking • Fully private</li>
          </ul>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>⚡ Powered by Ollama • Made with ❤️</p>
        </div>
      </div>
    </main>
  )
}