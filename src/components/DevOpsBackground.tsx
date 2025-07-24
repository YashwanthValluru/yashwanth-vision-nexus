import React, { useEffect, useState } from 'react';

const DevOpsBackground = () => {
  const [clouds, setClouds] = useState<Array<{ id: number; size: number; top: number; left: number; delay: number }>>([]);
  const [dataPackets, setDataPackets] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    // Generate realistic clouds
    const cloudArray = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 60, // 60-140px
      top: Math.random() * 60 + 10, // 10-70% from top
      left: Math.random() * 80 + 10, // 10-90% from left
      delay: Math.random() * 10, // 0-10s delay
    }));
    setClouds(cloudArray);

    // Generate data packets
    const packetArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5, // 0-5s delay
    }));
    setDataPackets(packetArray);
  }, []);

  return (
    <div className="cloud-container">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Realistic Clouds */}
      {clouds.map(cloud => (
        <div key={cloud.id} className="absolute" style={{
          top: `${cloud.top}%`,
          left: `${cloud.left}%`,
          animationDelay: `${cloud.delay}s`,
        }}>
          <div className="realistic-cloud" style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
          }}>
            <div className="cloud-part cloud-part-1"></div>
            <div className="cloud-part cloud-part-2"></div>
            <div className="cloud-part cloud-part-3"></div>
            <div className="cloud-part cloud-part-4"></div>
            <div className="cloud-part cloud-part-5"></div>
          </div>
        </div>
      ))}

      {/* Local Machine Icon */}
      <div className="absolute bottom-10 left-10 local-machine">
        <div className="w-16 h-12 bg-gradient-to-t from-primary/20 to-primary/10 rounded border border-primary/30 relative">
          <div className="absolute top-1 left-1 right-1 h-2 bg-primary/20 rounded-sm"></div>
          <div className="absolute bottom-1 left-2 right-2 h-1 bg-primary/30 rounded-sm"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-primary/40 rounded-full"></div>
        </div>
        <div className="text-xs text-primary/60 mt-1 text-center">Local</div>
      </div>

      {/* Data Flow Lines from Local to Cloud */}
      {dataPackets.map(packet => (
        <div
          key={packet.id}
          className="data-flow-line"
          style={{
            animationDelay: `${packet.delay}s`,
          }}
        />
      ))}

      {/* Floating Data Packets */}
      {dataPackets.map(packet => (
        <div
          key={`packet-${packet.id}`}
          className="data-packet"
          style={{
            animationDelay: `${packet.delay}s`,
          }}
        />
      ))}

      {/* Cloud Service Labels */}
      <div className="absolute top-20 right-20 cloud-service-label">
        <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary/80">
          AWS Cloud
        </div>
      </div>
      
      <div className="absolute top-40 right-32 cloud-service-label" style={{ animationDelay: '2s' }}>
        <div className="px-3 py-1 bg-web-cyan/10 border border-web-cyan/30 rounded-full text-xs text-web-cyan/80">
          Docker Hub
        </div>
      </div>

      <div className="absolute top-60 right-16 cloud-service-label" style={{ animationDelay: '4s' }}>
        <div className="px-3 py-1 bg-tech-purple/10 border border-tech-purple/30 rounded-full text-xs text-tech-purple/80">
          GitHub
        </div>
      </div>

      {/* Additional Ambient Effects */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-web-cyan rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-tech-purple rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default DevOpsBackground;