import React from 'react'

export const List = () => {
  return (
    <div className='col-4 d-flex justify-content-between align-items-center'>
        <table>
            <thead>
                <th>#</th>
                <th>Título</th>
                <th className='ps-5'>Duración</th>
            </thead>
            <tbody>
                <tr>
                    <td className='pe-5'>1</td>
                    <td >Lonely Boy</td>
                    <td className='ps-5 text-center'>3:13</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dead and Gone</td>
                    <td className='ps-5 text-center'>3:41</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Gold on the Ceiling</td>
                    <td className='ps-5 text-center'>3:44</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Little Back Submarines</td>
                    <td className='ps-5 text-center'>4:11</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Money Maker</td>
                    <td className='ps-5 text-center'>2:57</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Run Right Back</td>
                    <td className='ps-5 text-center'>3:17</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sister</td>
                    <td className='ps-5 text-center'>3:25</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Hell of a season</td>
                    <td className='ps-5 text-center'>3:45</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Stop Stop</td>
                    <td className='ps-5 text-center'>3:29</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Nova Baby</td>
                    <td className='ps-5 text-center'>3:27</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Mind Eraser</td>
                    <td className='ps-5 text-center'>3:14</td>
                </tr>
            </tbody>

        </table>

    </div>
  )
}
