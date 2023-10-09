import React from 'react'
import styled from 'styled-components'
import apple from "../assets/apple.png"
import apple1 from "../assets/ipad.png"
import apple2 from "../assets/mac.png"
import apple3 from "../assets/iphone.png"
function Orders() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Recent Order</h4> 
          </div>
          <div> 
            <button> SEE ALL</button>
            
          </div>
        </div>
        <div className="orders__table">
            <table>
            <tr>
              <th>Tracking ID</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#9876543</td>
              <td className="img"> <img src={apple} alt="" /><span>Apple Watch</span></td>
              <td>Dec 30, 2022</td>
              <td>£329</td>
              <td ><button>Complete</button></td>
            </tr>
            <tr>
              <td>#9876533</td>
              <td className="img"> <img src={apple1} alt="" /><span>Apple ipad Pro</span></td>
              <td>Dec 30, 2022</td>
              <td>£699</td>
              <td ><button>Complete</button></td>
            </tr>
            <tr>
              <td>#9876873</td>
              <td className="img"> <img src={apple2} alt="" /><span>Apple MacBook Pro 14</span></td>
              <td>Dec 29, 2022</td>
              <td>£1100</td>
              <td ><button>Complete</button></td>
            </tr>
            <tr>
              <td>#9866543</td>
              <td className="img"> <img src={apple3} alt="" /><span>Iphone 13 Pro Max</span></td>
              <td>Dec 29, 2022</td>
              <td>£899</td>
              <td ><button>Complete</button></td>
            </tr>
            </table>
        </div>
        </div>
        </Section>
    )
}

export default Orders
const Section = styled.section`
.orders {
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 ;
        div {
            display: flex;
            gap: 1rem;
            button {
                padding: 0.4rem 1rem;
                border: none;
                cursor: pointer;
                background-color: white;
                color: #668DFF;
                font-weight: bold;
            }
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        table {
            border-collapse: collapse;
            width: 100%;
            th, td {
                text-align: center;
                padding: 15px;
                justify-content: space-evenly;
                button {
border-radius: 0.3rem;
padding: 0.4rem 1rem;
border: none;
cursor: pointer;
background-color: #EEF4FF;
color: blue;
font-weight: bold;
                }
                img {
                    height: 2rem;
                    width: 2rem;
                }
                span {
                    margin-top: 0.2 rem;
                }
            }
            .img {
                display: flex;
                justify-content: left;
            }
        }
    }
}
`;