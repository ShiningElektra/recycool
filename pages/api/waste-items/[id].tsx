import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Field from "../../../components/field/Field";
import { APIWaste, getItems } from "../../../utils/api";

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [item, setItem] = useState<APIWaste[]>([]);

  useEffect(() => {
    getItems().then((item) => {
      setItem(item);
    });
  }, []);

  if (!item) {
    return <div>Item not found</div>;
  }

  const fieldItem = item.map((item) => {
    return <Field key={item.id} />;
  });
}

// export default function Item() {
//   const router = useRouter();
//   const { id: queryId } = router.query;
//   const [item, setItem] = useState<APIWaste>(null);

//   const id = Array.isArray(queryId) ? queryId[0] : queryId;

//   useEffect(() => {
//     getItems(id).then((item) => {
//       setItem(item);
//     });
//   }, [id]);

//   if (!item) {
//     return <div>Item not found</div>;
//   }

// const fieldItem = item.map((item) => (
//     <Field
//     imageSrc = {item.imageSrc}
//     />
// )

//   return <Field {...item} />;
// }
