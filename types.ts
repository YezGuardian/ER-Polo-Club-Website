import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  cta?: string;
  className?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}