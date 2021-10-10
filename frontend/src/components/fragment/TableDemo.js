import React,{ Fragment } from "react";
function TableRowComment({text})
{
    return (
      <>
          <tr>
              <td>{text}</td>
          </tr>
          <tr>
              <td>{text}</td>
          </tr>
      </>

    );
}

function TableDemo(props)
{
    console.log("Data ",props.data);
    return(<table>
        <thead>
            <tr>
                <th>Comment</th>
            </tr>

        </thead>
        <tbody>
        {
            props.data.map(data=><TableRowComment
                key={data.id}
                text={data.text}/>)
        }
        </tbody>
    </table>)
}
export default TableDemo;