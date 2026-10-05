import React from 'react';

export default function ScientificFormulas() {
  const formulas = [
    { text: "E = mc²", top: "12%", left: "5%", delay: "0s" },
    { text: "π ≈ 3.14159", top: "75%", left: "8%", delay: "1.2s" },
    { text: "Σ x²", top: "18%", right: "8%", delay: "0.6s" },
    { text: "∫ f(x) dx", top: "80%", right: "12%", delay: "2s" },
    { text: "F = ma", top: "45%", left: "2%", delay: "1.8s" },
    { text: "∇ × E = -∂B/∂t", top: "52%", right: "4%", delay: "2.5s" }
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {formulas.map((f, idx) => (
        <div
          key={idx}
          className="floating-formula"
          style={{
            top: f.top,
            left: f.left,
            right: f.right,
            animationDelay: f.delay
          }}
        >
          {f.text}
        </div>
      ))}
    </div>
  );
}
