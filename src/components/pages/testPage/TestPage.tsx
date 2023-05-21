import React from 'react';
import style from './TestPage.module.scss';

const TestPage: React.FC = () => (
  <>
    <div className={style.background}></div>
    <div className={style.backgroudImage}></div>
    <div className={style.page}>
      <div className={style.main}>
        <div className={style.organism}>
          <div className={style.title}>title</div>
          <div className={style.editor} />
          <div className={style.listContainer}>
            <div className={style.scrollableArea}>
              <div className={style.item}>item1</div>
              <div className={style.item}>item 2</div>
              <div className={style.item}>item 3</div>
              <div className={style.item}>item 4</div>
              <div className={style.item}>item 5</div>
              <div className={style.item}>item 6</div>
              <div className={style.item}>item 7</div>
              <div className={style.item}>item 8</div>
              <div className={style.item}>item 9</div>
              <div className={style.item}>item 10</div>
              <div className={style.item}>item 11</div>
              <div className={style.item}>item 12</div>
              <div className={style.item}>item 13</div>
              <div className={style.item}>item 14</div>
              <div className={style.item}>item 15</div>
              <div className={style.item}>item 16</div>
              <div className={style.item}>item 17</div>
              <div className={style.item}>item 18</div>
              <div className={style.item}>item 19</div>
              <div className={style.item}>item 20</div>
              <div className={style.item}>item 21</div>
            </div>
            <div className={style.menuItem}>menuItem</div>
          </div>
          <div className={style.dragLabel}>dragLabel</div>
        </div>
      </div>
    </div>
  </>
);

export default TestPage;
