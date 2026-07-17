import { useState } from 'react'
import { ReviewTool } from 'react-page-review'
import 'react-page-review/style.css'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div style={{ padding: 40, fontFamily: 'system-ui, sans-serif' }}>
      <h1>React Page Review Test</h1>
      <button onClick={() => setActive(true)}>Start Review</button>

      <div style={{ marginTop: 40, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div
            key={i}
            className="test-card"
            style={{
              padding: 24,
              border: '1px solid #ddd',
              borderRadius: 8,
              background: '#fafafa'
            }}
          >
            <h3>Card {i}</h3>
            <p>This is card number {i}. Click to select it in review mode.</p>
            <button>Action {i}</button>
          </div>
        ))}
      </div>

      {/* reportInfo：演示自定义注入字段；total 为保留键，注入不生效，用于 e2e 验证保护逻辑 */}
      <ReviewTool
        active={active}
        onActiveChange={setActive}
        pagePath="/test"
        reportInfo={{ version: '9.9.9-e2e', channel: 'e2e', total: 999, build: null }}
      />
    </div>
  )
}

export default App
