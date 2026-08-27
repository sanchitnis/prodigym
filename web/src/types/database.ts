export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole =
  | 'student'
  | 'faculty'
  | 'mentor'
  | 'institutional_lead'
  | 'industry_partner'
  | 'admin';

export type SrujanaStage = 'Stage 1' | 'Stage 2' | 'Stage 3' | 'Stage 4';

export interface DBUser {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
  institution: string | null;
  avatar: string | null;
  points: number;
  stage: SrujanaStage;
  badge: string;
  created_at: string;
  updated_at: string;
}

export interface DBProject {
  id: string;
  title: string;
  category: string;
  stage: string;
  smi_score: number;
  description: string;
  lead_name: string;
  institution: string | null;
  github_url: string | null;
  demo_url: string | null;
  upvotes: number;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
}

export interface DBLeaderboardEntry {
  id: string;
  user_id: string | null;
  name: string;
  institution: string;
  stage: string;
  points: number;
  velocity: string;
  badge: string;
  rank: number;
  created_at: string;
}

export interface DBHubNode {
  id: string;
  institution_name: string;
  executive_sponsor: string | null;
  active_students: number;
  completed_probes: number;
  tier: string;
  spocs_count: number;
  created_at: string;
}

export interface DBAudienceInquiry {
  id: string;
  name: string;
  email: string;
  role_type: 'student' | 'faculty' | 'mentor' | 'hub' | 'industry' | 'general';
  organization: string | null;
  message: string;
  status: 'new' | 'reviewed' | 'contacted' | 'archived';
  created_at: string;
}

export interface DBBroadcastSubscriber {
  id: string;
  email: string;
  role_interest: string;
  subscribed_at: string;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: DBUser;
        Insert: Partial<DBUser> & { id: string; email: string };
        Update: Partial<DBUser>;
      };
      projects: {
        Row: DBProject;
        Insert: Omit<DBProject, 'id' | 'created_at'> & { id?: string };
        Update: Partial<DBProject>;
      };
      leaderboard_entries: {
        Row: DBLeaderboardEntry;
        Insert: Omit<DBLeaderboardEntry, 'id' | 'created_at'> & { id?: string };
        Update: Partial<DBLeaderboardEntry>;
      };
      hub_nodes: {
        Row: DBHubNode;
        Insert: Omit<DBHubNode, 'id' | 'created_at'> & { id?: string };
        Update: Partial<DBHubNode>;
      };
      audience_inquiries: {
        Row: DBAudienceInquiry;
        Insert: Omit<DBAudienceInquiry, 'id' | 'created_at'> & { id?: string };
        Update: Partial<DBAudienceInquiry>;
      };
      broadcast_subscribers: {
        Row: DBBroadcastSubscriber;
        Insert: Omit<DBBroadcastSubscriber, 'id' | 'subscribed_at'> & { id?: string };
        Update: Partial<DBBroadcastSubscriber>;
      };
    };
  };
}
