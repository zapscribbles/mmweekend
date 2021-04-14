const { createClient } = supabase
const SUPABASE_URL = "https://djkwwhqdshosckmafubq.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODQwNjY4MywiZXhwIjoxOTMzOTgyNjgzfQ.u1Jxs7UkfsIzgNrxsHIcjgQL9tSnT4K0c7cYXDx_Iig'
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sb_signUp(email, password) {
    return await supabase.auth.signUp({
        email: email,
        password: password
    });
}

function sb_currentUser() {
    return supabase.auth.user();
}