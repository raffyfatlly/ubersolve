import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qnjcatbjkpjwjukjjhne.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuamNhdGJqa3Bqd2p1a2pqaG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxOTc1MjYsImV4cCI6MjA0Nzc3MzUyNn0.W0wLsR2OL-JMc9GXjrhjHnYEUnqaMsXYK6G6YHwn5vY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl) && Boolean(supabaseAnonKey);
};