import React from "react";
import { WhoAmIComponent } from "./WhoAmIComponent";

export function WhoAmIComponentFull() {
    return (
      <main className="z-50">
        <WhoAmIComponent
          name="Jane Doe"
          title="Full Stack Developer"
          bio="Passionate about creating seamless user experiences and robust backend systems. With 5 years of experience in web development, I specialize in React, Node.js, and cloud technologies."
          skills={["React", "Node.js", "TypeScript", "AWS", "GraphQL"]}
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          socialLinks={[
            { name: "GitHub", url: "https://github.com/janedoe" },
            { name: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
            { name: "Twitter", url: "https://twitter.com/janedoe" },
          ]}
        />
      </main>
    )
  }