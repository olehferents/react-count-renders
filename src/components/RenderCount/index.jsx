import { useRef, useState } from 'react'

const RenderCount = () => {
  const [_, forceUpdate] = useState(null)
  const renderCount = useRef(0)

  renderCount.current = renderCount.current + 1

  return (
    <div>
      <p>
        <button type="button" onClick={() => forceUpdate(new Date())}>
          renders count is: {renderCount.current}
        </button>
      </p>
    </div>
  )
}

export default RenderCount
