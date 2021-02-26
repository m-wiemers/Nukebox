import { useEffect, useState } from "react";

function ViewCount() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const newViews = +localStorage.getItem("views") + 1;
    setViews(newViews);
    localStorage.setItem("views", String(newViews));
  }, []);

  return <p>This is your {views}. visit!</p>;
}
export default ViewCount;
