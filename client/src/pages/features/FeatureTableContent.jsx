import React, { useState } from "react";

export default function FeatureTableContent(props) {
    const [count, setCount] = useState(1);

  return (
    <tr className="">
      <td className="text-start ps-5 py-5">
        <div className="d-flex justify-content-start gap-4">
            <img src={props.tableImage} alt="table_image" style={{width:"17%"}}/><p><br/>{props.imgName}</p>
        </div><br/>
      </td>
      <td className="text-start py-5"><br/>${props.price}</td>
      <td className="text-end py-5"><br/>
        <div className="d-flex justify-content-end">
        <button onClick={() => setCount(count - 1)} className="btn shadow-none border-secondary rounded-0 rounded-start">-</button>
        <input type="number" className="btn shadow-none border-secondary px-1 rounded-0" value={count} onChange={e => setCount(e.target.value)} style={{width:"35px"}}/>
        <button onClick={() => setCount(count + 1)} className="btn shadow-none border-secondary rounded-0 rounded-end">+</button>
        </div>
      </td>
      <td className="text-end pe-5 py-5"><br/>${count*props.price}</td>
    </tr>
  );
}
