import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://zievatneehjtkkuvbuxy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZXZhdG5lZWhqdGtrdXZidXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2ODI0MTMsImV4cCI6MjA3MzI1ODQxM30.JtZbWV-pUxRE7sL8Wh4jyzK0nMlI5Tuu4vyQunRrcUg')
