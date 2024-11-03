'use client';

import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0)

  function handleCilck() {
    // alert('You clicked me!');
    setCount(count + 1)
  }


  return (
    <button onClick={handleCilck}>
      I'm a button1 {count}
    </button>
  );
}
let isSHow: boolean = false

const product = {
  name: "good1"
}

let content;
if (isSHow) {
  content = <h1>Welcome to my app {product.name}</h1>
} else {
  content = <h1>Welcome to  {product.name}</h1>
}

// export const ToastDemo = () => {
//   const { toast } = useToast()

//   return (
//     <Button
//       onClick={() => {
//         toast({
//           title: "Scheduled: Catch up",
//           description: "Friday, February 10, 2023 at 5:57 PM",
//         })
//       }}
//     >
//       Show Toast
//     </Button>
//   )
// }


// "use client"

// import { useToast } from "@/components/hooks/use-toast"
// import { Button } from "@/components/ui/button"







const HelloPage = async () => {
  return (
    <div>
      <div>{content}</div>
      <MyButton />
      <br />
      <MyButton />
    </div>
  );
};

export default HelloPage;