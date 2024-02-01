import React, { useState } from 'react'

function GeneralItemTab() {
    
    const [selectTab, setSelectTab] = useState(0)
    return (
        <section id='size-chart ' className='flex p-24 gap-8 backdrop-blur-2xl'>
            <ul className='flex flex-col'>
                <li onClick={() => { setSelectTab(0); }}
                    className={`${selectTab === 0 ? 'outline outline-indigo-500' : ''} text-nowrap uppercase hover:bg-green-2 hover:bg-opacity-25 cursor-pointer px-5 py-4 font-bold`}>SIZE CHART</li>
                <li onClick={() => { setSelectTab(1); }}
                    className={`${selectTab === 1 ? 'outline outline-indigo-500' : ''} text-nowrap uppercase hover:bg-green-2 hover:bg-opacity-25 cursor-pointer px-5 py-4 font-bold`}>shipping</li>
            </ul>
            {selectTab === 0 ?
                (<div className='w-full border-l-4 border-indigo-500 pl-4'>
                    <h2 className='uppercase font-medium text-xl py-4'>/ Clothers</h2>
                    <p className='pb-4'>Please refer to the size table below to select your correct size:</p>
                    <div className='flex flex-wrap gap-8 pb-8 items-start justify-between'>
                        <table className=' p-3 w-2/5 uppercase mr-8 border-2 border-indigo-500'>
                            <tr className='bg-indigo-500'>
                                <th className='font-medium text-white'>CM/KG</th>
                                <th className='font-medium text-white'>45KG</th>
                                <th className='font-medium text-white'>50KG</th>
                                <th className='font-medium text-white'>55KG</th>
                                <th className='font-medium text-white'>60KG</th>
                                <th className='font-medium text-white'>65KG</th>
                                <th className='font-medium text-white'>70KG</th>
                                <th className='font-medium text-white'>75KG</th>
                                <th className='font-medium text-white'>80KG</th>
                                <th className='font-medium text-white'>85KG</th>
                                <th className='font-medium text-white'>90KG</th>
                                <th className='font-medium text-white'>95KG</th>
                            </tr>
                            <tr>
                                <td>155CM</td><td>m</td><td>m</td><td>m</td>
                                <td>m</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>160CM</td><td>m</td><td>m</td><td>m</td>
                                <td>m</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>165CM</td><td>m</td><td>m</td><td>m</td>
                                <td>m</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>170CM</td><td>m</td><td>m</td><td>m</td>
                                <td>l</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>175CM</td><td>l</td><td>l</td><td>l</td>
                                <td>l</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>180CM</td><td>l</td><td>l</td><td>l</td>
                                <td>l</td><td>l</td><td>l</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>185CM</td><td>xl</td><td>xl</td><td>xl</td>
                                <td>xl</td><td>xl</td><td>xl</td><td>xl</td>
                                <td>xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>190CM</td><td>2xl</td><td>2xl</td><td>2xl</td>
                                <td>2xl</td><td>2xl</td><td>2xl</td><td>2xl</td>
                                <td>2xl</td><td>2xl</td><td>3xl</td><td>4xl</td>
                            </tr>
                            <tr>
                                <td>195CM</td><td>2xl</td><td>2xl</td><td>2xl</td>
                                <td>2xl</td><td>3xl</td><td>3xl</td><td>3xl</td>
                                <td>4xl</td><td>5xl</td><td>5xl</td><td>5xl</td>
                            </tr>
                        </table>
                        <img src='https://cdn.shopify.com/s/files/1/0271/9658/8125/files/size-chart.jpg?v=1621942442' alt='size-chart'
                            className='w-2/5' />
                    </div>
                    <hr />
                    <h2 className='uppercase font-medium text-xl py-4'>/ shoes</h2>
                    <p className='pb-4'>Please refer to it:</p>
                    <div className='flex items-start justify-between flex-wrap gap-8'>
                        <img src='https://cdn.shopify.com/s/files/1/0095/3398/0769/files/Your_Foot_Lenght_480x480.jpg?v=1604685667' alt='img' className='w-2/5 ' />
                        <table className=' p-3 w-2/5 border-2 border-indigo-500 text-center'>
                            <tr className='bg-indigo-500'>
                                <th className='font-medium text-white'>Foot Length KG</th>
                                <th className='font-medium text-white'>US KG</th>
                                <th className='font-medium text-white'>EU KG</th>
                            </tr>
                            <tr>
                                <td>CM.5 cm (36 in)</td><td>4</td><td>35</td>
                            </tr>
                            <tr>
                                <td>23 cm (37 in)</td><td>5</td><td>36</td>
                            </tr>
                            <tr>
                                <td>23.5 cm (39 in)</td><td>5.5</td><td>37</td>
                            </tr>
                            <tr>
                                <td>24 cm (40 in)</td><td>6</td><td>38</td>
                            </tr>
                            <tr>
                                <td>24.5 cm (42 in)</td><td>6.5</td><td>39</td>
                            </tr>
                            <tr>
                                <td>25 cm (44 in)</td><td>7</td><td>40</td>
                            </tr>
                            <tr>
                                <td>25.5 cm (45 in)</td><td>8</td><td>41</td>
                            </tr>
                            <tr>
                                <td>26 cm (47 in)</td><td>8.5</td><td>42</td>
                            </tr>
                            <tr>
                                <td>26.5 cm (48 in)</td><td>9</td><td>43</td>
                            </tr>
                            <tr>
                                <td>27 cm (48 in)</td><td>10</td><td>44</td>
                            </tr>
                            <tr>
                                <td>27.5 cm (48 in)</td><td>11</td><td>45</td>
                            </tr>
                            <tr>
                                <td>28 cm (48 in)</td><td>12</td><td>46</td>
                            </tr>
                            <tr>
                                <td>28.5 cm (48 in)</td><td>12.5</td><td>47</td></tr>
                        </table>
                    </div>
                </div>)
                : (<div className='w-full border-l-4 border-a5outline-indigo-500 pl-4 border-indigo-500'>
                    <ul className='list-disc list-inside'>
                        <li>Average processing time: <span className=' font-bold'>2 business days</span></li>
                        <li>Average delivery time: <span className=' font-bold'>2 weeks</span></li>
                    </ul>
                    <p className='my-8'>Your items will be delivered within:</p>
                    <ul className='list-disc list-inside'>
                        <li>7 to 14 working days for the <span className=' font-bold'>USA</span> and <span className=' font-bold'>Canada</span>. </li>
                        <li>7 to 14 working days for <span className=' font-bold'>European countries</span>.</li>
                        <li>7 to 21 working days for the <span className=' font-bold'>rest of the world</span>.</li>
                    </ul>
                    <p className='my-8'>Feel free to reach our team if you have any question: <a href='#' className='text-indigo-500 font-medium'>tiendatyenbai2001@gmail.com</a></p>
                </div>)}
        </section>
    )
}

export default GeneralItemTab