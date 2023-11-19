export interface Campaign {
  campaign_year: number;
  campaign_carrousel: CampaignCarrousel[];
}

export interface CampaignCarrousel {
  id: number;
  campaign_name: string;
  campaign_date: Date;
  campaign_description: string;
  campaign_active: boolean;
}
