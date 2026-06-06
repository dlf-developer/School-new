import React, { useState } from 'react'

export default function ImageWithLoader({ src, alt, className = "", imgClassName = "", ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-brand-greenDeep/5 w-full h-full ${className}`}>
      {/* Premium Loader / Pulse Skeleton Indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-greenDeep/5 animate-pulse z-10">
          <div className="w-8 h-8 rounded-full border-2 border-brand-greenDeep/10 border-t-brand-greenDeep animate-spin"></div>
        </div>
      )}

      {/* Image with smooth fade-in scale transition */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${imgClassName}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
