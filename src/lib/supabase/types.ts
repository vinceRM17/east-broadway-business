export type Database = {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string;
          name: string;
          description: string;
          category: string;
          address: string;
          phone: string | null;
          email: string | null;
          website: string | null;
          image_url: string | null;
          latitude: number;
          longitude: number;
          hours: string | null;
          is_member: boolean;
          created_at: string;
        };
        Insert: {
          name: string;
          description: string;
          category: string;
          address: string;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          image_url?: string | null;
          latitude: number;
          longitude: number;
          hours?: string | null;
          is_member?: boolean;
        };
        Update: {
          name?: string;
          description?: string;
          category?: string;
          address?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          date: string;
          end_date: string | null;
          time: string;
          location: string;
          category: string;
          image_url: string | null;
          is_approved: boolean;
          submitted_by: string | null;
          submitted_email: string | null;
          created_at: string;
        };
        Insert: {
          title: string;
          description: string;
          date: string;
          end_date?: string | null;
          time: string;
          location: string;
          category: string;
          image_url?: string | null;
          submitted_by?: string | null;
          submitted_email?: string | null;
        };
        Update: {
          title?: string;
          description?: string;
          date?: string;
          time?: string;
          location?: string;
          category?: string;
        };
      };
      leaders: {
        Row: {
          id: string;
          name: string;
          title: string;
          bio: string;
          image_url: string | null;
          email: string | null;
          phone: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          name: string;
          title: string;
          bio: string;
          image_url?: string | null;
          email?: string | null;
          phone?: string | null;
          order: number;
        };
        Update: {
          name?: string;
          title?: string;
          bio?: string;
        };
      };
      membership_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          business_name: string | null;
          message: string;
          type: "business" | "volunteer" | "general";
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          business_name?: string | null;
          message: string;
          type: "business" | "volunteer" | "general";
        };
        Update: {
          name?: string;
          email?: string;
          message?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

export type Business = Database["public"]["Tables"]["businesses"]["Row"];
export type Event = Database["public"]["Tables"]["events"]["Row"];
export type Leader = Database["public"]["Tables"]["leaders"]["Row"];
export type MembershipInquiry = Database["public"]["Tables"]["membership_inquiries"]["Row"];
