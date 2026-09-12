import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Activity } from 'lucide-react';
export default function SocStatusBar() {
  const { t } = useLanguage();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-cyber-bg/80 backdrop-blur-sm border-b border-cyber-border text-xs text-cyber-muted py-1">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-6">
        <div className="flex items-center space-x-2">
          <Activity size={14} className="text-cyber-green" />
          <span className="hidden sm:inline">{t('status.system', 'System')}:</span>
          <span className="text-cyber-text flex items-center">
            <span className="w-2 h-2 rounded-full bg-cyber-green status-pulse mr-2"></span>
            {t('status.operational', 'Operational')}
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 hidden sm:flex">
            <Shield size={14} className="text-cyber-cyan" />
            <span>{t('status.threat', 'Threat')}:</span>
            <span className="text-cyber-green">{t('status.low', 'Low')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{t('status.defense')}:</span>
            <span className="text-cyber-text">{t('status.active', 'Active')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
