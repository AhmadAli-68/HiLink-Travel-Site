export interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
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