import React, { useEffect, useState } from 'react';

const DevOpsBackground = () => {
  const [clouds, setClouds] = useState<Array<{ id: number; size: number; top: number; left: number; delay: number }>>([]);
  const [networkLines, setNetworkLines] = useState<Array<{ id: number; top: number; width: number; delay: number }>>([]);
  const [techNodes, setTechNodes] = useState<Array<{ id: number; top: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random clouds
    const cloudArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 40, // 40-100px
      top: Math.random() * 80, // 0-80% from top
      left: Math.random() * 100, // 0-100% from left
      delay: Math.random() * 15, // 0-15s delay
    }));
    setClouds(cloudArray);

    // Generate network lines
    const lineArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top: Math.random() * 100, // 0-100% from top
      width: Math.random() * 300 + 100, // 100-400px width
      delay: Math.random() * 5, // 0-5s delay
    }));
    setNetworkLines(lineArray);

    // Generate tech nodes
    const nodeArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100, // 0-100% from top
      left: Math.random() * 100, // 0-100% from left
      delay: Math.random() * 3, // 0-3s delay
    }));
    setTechNodes(nodeArray);
  }, []);

  return (
    <div className="cloud-container">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      {/* Floating Clouds */}
      {clouds.map(cloud => (
        <div
          key={cloud.id}
          className="floating-cloud"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}

      {/* Network Data Lines */}
      {networkLines.map(line => (
        <div
          key={line.id}
          className="network-line"
          style={{
            top: `${line.top}%`,
            width: `${line.width}px`,
            left: '0',
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}

      {/* Tech Nodes */}
      {techNodes.map(node => (
        <div
          key={node.id}
          className="tech-node"
          style={{
            top: `${node.top}%`,
            left: `${node.left}%`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}

      {/* Additional Visual Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-web-cyan/5 animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-tech-purple/5 to-primary/5 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-web-cyan/5 to-tech-purple/5 animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default DevOpsBackground;