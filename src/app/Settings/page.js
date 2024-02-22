import Setting from "@/Components/Setting";
import React from "react";

function page() {
  return (
    <div className="w-full px-6 py-5">
      <Setting
        profileImg="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D"
        name="Muhammad Jawad"
        password="132456"
      />
    </div>
  );
}

export default page;
