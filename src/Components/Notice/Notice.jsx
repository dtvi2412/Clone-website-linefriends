import React from 'react';
import Card from '../Card/Card';
import './Notice.scss';
function Notice() {
  return (
    <section className="notice">
      <div className="notice__content">
        <table className="notice__content__table">
          <caption>NOTICE</caption>
          <thead>
            <tr>
              <th>No.</th>
              <th>Country/Region</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>26</td> <td></td>
              <td>[Event Notice] ITZY X LINEFRIENDS Drawing Challenge</td>
              <td>2020-09-11</td>
            </tr>
            <tr>
              <td>25</td>
              <td></td>
              <td>2020 BROWN DAY Promotion Notice</td>
              <td> 2020-08-06</td>
            </tr>
            <tr>
              <td>24</td> <td></td>
              <td>2020 Summer Sale Notice (7/17 - 8/2)</td>
              <td>2020-07-15</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="notice__navigation">
        <ul>
          <li>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
      <Card />
    </section>
  );
}

export default Notice;
