import { FiRefreshCcw } from "react-icons/fi"

const LoadingSpinner = () => {
  return (
    <div className="loading">
        <div className="animate-spin">
            <FiRefreshCcw size={42}/>
        </div>
    </div>
  )
}

export default LoadingSpinner