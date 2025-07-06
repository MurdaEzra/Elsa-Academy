import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojdgnxdlbohujvulpuao.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZGdueGRsYm9odWp2dWxwdWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDUwNzksImV4cCI6MjA2NjkyMTA3OX0.-jjN0N7jmi0S01XAk0RZyY4k8mzG4DkpivtULVl3Pp8' 
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase