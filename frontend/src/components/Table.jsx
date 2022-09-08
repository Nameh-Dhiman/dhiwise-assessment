import styles from "./Table.module.scss";
import Level1 from "./subcomponents/Level1";
import Level2 from "./subcomponents/Level2";
import Level3 from "./subcomponents/Level3";
import Level4 from "./subcomponents/Level4";
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:8080")
        .then((res) => setData([...res.data]))
        .catch((err) => console.error(err));
    };
    getData();
  }, []);

    return (
      <div className={styles.TableContainer}>
        <table>
          {Data[0] && (
            <tbody>
              <tr style={{ backgroundColor: "#1DC28F" }}>
                <td>
                  <Level1 data={Data[0].data} />
                </td>
              </tr>
              <tr style={{ backgroundColor: "#76D185" }}>
                {Data[0].level2.map((el) => (
                  <td>
                    <Level2 data={el.data} key={el._id} />
                  </td>
                ))}
              </tr>
              <tr style={{ backgroundColor: "#AFDE81" }}>
                {Data[0].level2[0].level3.map((el) => (
                  <td>
                    <Level3 data={el.data} key={el._id} />
                  </td>
                ))}
                {Data[0].level2[1].level3.map((el) => (
                  <td>
                    <Level3 data={el.data} key={el._id} />
                  </td>
                ))}
              </tr>
              <tr style={{ backgroundColor: "#E3E986" }}>
                {Data[0].level2[0].level3[0].level4.map((el) => (
                  <td>
                    <Level4 data={el.data} key={el._id} />
                  </td>
                ))}
                {Data[0].level2[0].level3[1].level4.map((el) => (
                  <td>
                    <Level4 data={el.data} key={el._id} />
                  </td>
                ))}
                {Data[0].level2[1].level3[0].level4.map((el) => (
                  <td>
                    <Level4 data={el.data} key={el._id} />
                  </td>
                ))}
                {Data[0].level2[1].level3[1].level4.map((el) => (
                  <td>
                    <Level4 data={el.data} key={el._id} />
                  </td>
                ))}
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  
};
export default Table;
