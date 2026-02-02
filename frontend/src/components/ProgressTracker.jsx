import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const restorationPhases = [
  {
    name: 'Assessment & Planning',
    status: 'completed',
    progress: 100,
    description: 'Full inspection and restoration plan completed',
    icon: CheckCircle2
  },
  {
    name: 'Parts Acquisition',
    status: 'in-progress',
    progress: 65,
    description: 'Sourcing authentic Mercedes parts (65% complete)',
    icon: Clock
  },
  {
    name: 'Body & Paint',
    status: 'pending',
    progress: 0,
    description: 'Professional bodywork and black paint restoration',
    icon: Circle
  },
  {
    name: 'Engine & Mechanical',
    status: 'pending',
    progress: 0,
    description: '3.0L engine rebuild and mechanical overhaul',
    icon: Circle
  },
  {
    name: 'Interior Restoration',
    status: 'pending',
    progress: 0,
    description: 'Upholstery, dashboard, and trim work',
    icon: Circle
  },
  {
    name: 'Final Assembly',
    status: 'pending',
    progress: 0,
    description: 'Putting it all together and road testing',
    icon: Circle
  }
];

const ProgressTracker = () => {
  const overallProgress = Math.round(
    restorationPhases.reduce((sum, phase) => sum + phase.progress, 0) / restorationPhases.length
  );

  return (
    <section className="progress-section">
      <div className="container-vintage">
        <div className="section-header">
          <span className="section-label">RESTORATION PROGRESS</span>
          <h2 className="section-title">The Journey to Perfection</h2>
          <p className="section-subtitle">
            Track the restoration progress in real-time
          </p>
        </div>

        <Card className="overall-progress-card">
          <div className="overall-header">
            <h3 className="overall-title">Overall Completion</h3>
            <div className="overall-percentage">{overallProgress}%</div>
          </div>
          <Progress value={overallProgress} className="overall-progress-bar" />
          <p className="overall-note">
            With your support, we're bringing this legend back to life
          </p>
        </Card>

        <div className="phases-grid">
          {restorationPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card key={index} className={`phase-card ${phase.status}`}>
                <div className="phase-header">
                  <Icon className={`phase-icon ${phase.status}`} />
                  <div className="phase-info">
                    <h3 className="phase-name">{phase.name}</h3>
                    <p className="phase-description">{phase.description}</p>
                  </div>
                </div>
                {phase.status !== 'pending' && (
                  <div className="phase-progress">
                    <Progress value={phase.progress} className="phase-progress-bar" />
                    <span className="phase-percentage">{phase.progress}%</span>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
