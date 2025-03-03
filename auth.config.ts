import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        console.log({credentials});
        
        return {
          id: "1",
          name: "Test User",
          email: "test@test.com"
        }
      },
    }),
  ],
} satisfies NextAuthConfig
