export interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

export interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export interface FeatureItemProps {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

export interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}