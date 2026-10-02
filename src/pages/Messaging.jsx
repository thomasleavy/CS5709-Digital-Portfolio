import { useState } from "react"

function Messaging() {
  const [messages, setMessages] = useState([])
  const [notice, setNotice] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const nextMessage = {
      id: crypto.randomUUID(),
      name: data.get("name").toString().trim(),
      email: data.get("email").toString().trim(),
      message: data.get("message").toString().trim(),
      sentAt: new Date().toLocaleString(),
    }

    setMessages((current) => [...current, nextMessage])
    setNotice("Message sent")
    form.reset()
  }

  return (
    <main className="page">
      <h1>Contact</h1>
      <p>Use the form below to send me a message.</p>

      {notice ? <p className="message-notice">{notice}</p> : null}

      <section className="message-thread" aria-label="Messages">
        <h2>Messages</h2>

        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul>
            {messages.map((item) => (
              <li key={item.id}>
                <p className="message-meta">
                  <strong>{item.name}</strong>
                  <span>{item.sentAt}</span>
                </p>
                <p className="message-email">{item.email}</p>
                <p>{item.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" required />

        <button type="submit">Send Message</button>
      </form>
    </main>
  )
}

export default Messaging
