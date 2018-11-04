import React from 'react'
import './style.css'
import Logo from '../../../asset/IconSE2.jpg'
import htmlToImage from 'html-to-image'


const Bill =({
 bill,products
}) => (
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src={Logo} style={{width:"100%",maxWidth:"300px"}} />
                            </td>
                            
                            <td>
                                Invoice #: {bill['id']}<br/>
                                Created: {bill["date"]} <br/>
                                Due: {bill["date"]}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                            61/36 ซ.พระยาสุเรนทร์13 <br />
                            ถนนพระยาสุเรนทร์ <br />
                            แขวงบางชัน เขต คลองสามวา <br/>
                            กรุงเทพมหานคร 10510
                            </td>
                            
                            <td>
                                02-518-0933<br/>
                                Sushi Ngai<br/>
                                Sushi Ngai Delivery
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            {/* <tr class="heading">
                <td>
                    Payment Method
                </td>
                
                <td>
                    Check #
                </td>
            </tr>
            
            <tr class="details">
                <td>
                    Check
                </td>
                
                <td>
                    1000
                </td>
            </tr> */}
            
            <tr class="heading">
                <td>
                    Item
                </td>
                
                <td>
                    Price
                </td>
            </tr>
            {
                products.map((data)=>(
                    <tr class="item">
                        <td>
                        {data['product_id']['name']}
                        </td>
                        
                        <td>
                        {data['product_id']['price']}
                        </td>
                    </tr> 
                ))
            }
            <tr class="total">
                <td></td>
                
                <td>
                   Total: {bill['amount']}
                </td>
            </tr>
        </table>
    </div>
)

export default Bill