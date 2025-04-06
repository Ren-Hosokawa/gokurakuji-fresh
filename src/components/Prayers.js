// src/components/Prayers.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import FadeInSection from './FadeInSection';

const Prayers = () => {
  return (
    <div className="about-page">
      <FadeInSection>
        <h2 className="section-title">ご供養・ご祈祷</h2>
        <hr className="section-divider" />
      </FadeInSection>

      <FadeInSection>
        <section className="about-description">
          <p>
            ご先祖のご回向、諸願成就のご祈祷、永代供養、水子供養、ペット供養を勤めさせていただきます。
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="prayer-section">
          <h3>▪️ご回向</h3>
          <p>
            日々のご回向　春と秋のお彼岸法要　ご命日　年忌法要
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="prayer-section">
          <h3>▪️ご祈祷（極楽寺柴燈大護摩供）</h3>
          <p>
            家内安全　安産成就　厄除招福　交通安全　商売繁盛　五穀豊穣<br />
            心願成就　開運成就　良縁成就　当病平癒　就職成就　その他
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="prayer-section">
          <h3>▪️永代供養</h3>
          <p>
            永代過去帳に命日・俗名・戒名等を記入し、永代にわたりご回向を勤めさせていただくものです。
          </p>
          <p>
            身寄りも少なく、ご自身の没後のご葬儀のこと等ご不安な方はご相談ください。
            生前のお申し込みも可能です。
          </p>
          <p>
            ご親族、身寄りがあるけれど、迷惑をかけたくない等不安がある方、
            また墓じまいをお考えの方もご相談ください。
          </p>
          <p>
            極楽寺では、それぞれのスタイルに合わせた永代納骨供養墓がございますので、
            ぜひご見学にお越しください。丁寧にご提案させていただきます。→ <Link to="/tombs" className="link-inline">お墓のページ</Link>
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="prayer-section">
          <h3>▪️水子供養</h3>
          <p>
            極楽寺では、水子卒塔婆供養をさせていただいております。
          </p>
          <p>
            水子卒塔婆供養料　一霊　10,000円（複数の場合は、二霊目から5,000円）<br />
            宗旨宗派は不問です。秘密は厳守致します。<br />
            その他、ご質問などがございましたら、ご相談下さい。
          </p>
          <p>
            <strong>水子供養とは…</strong><br />
            水子とは、母体に宿った小さな命が、この世の光を目にすることなく絶えてしまったお子様の霊です。
            そして、その霊を弔い、あなた自身の気持ちや祈りを捧げ、ご供養することです。
            施主であるあなたの「ご供養をする」という気持ちが、一番大切なのです。
          </p>
          <p>
            <strong>卒塔婆とは…</strong><br />
            インドの言葉「ストゥパ」＝「お釈迦様のお骨を納めた塔」という意味です。
            その形を表現したものが、今日の「お塔婆」です。
            昔から、お塔婆を建てて供養することは、ありがたい塔を建立したものと同様の、大きな功徳があると言われています。
          </p>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="prayer-section">
          <h3>▪️ペット供養</h3>
          <p>
            我が子のように家族の一員として一緒に過ごしたペットとの別れは辛いものです。
            極楽寺はその悲しみを少しでも和らげるお手伝いができたらと思っております。
          </p>
          <p>
            高野山では、遥か昔から動物と深く関わりがございます。
            今昔物語集などにも言い伝えられています。
          </p>
          <p>
            ～弘仁7年7月のこと。弘法大師は自身が唐から投げた三鈷の落下地を尋ねて、
            大和国宇智郡（奈良県五條市）を歩いていました。
          </p>
          <p>
            すると、向こうから１人の猟師がやってきました。
            顔は赤く、背丈は8尺（2.4メートル）ばかりで、弓矢を持ち青い色の小袖を着ています。
            白黒2匹の犬をひきいた姿は、筋骨隆々で見るからにたくましい狩人でした。
          </p>
          <p>
            大師はこの猟師に呼び止められて、旅の目的を話しました。すると猟師は、
            「私は“南山の犬飼”だが、その場所を知っている。教えてあげよう」
            と言い、連れていた2匹の犬に大師を先導するように言いました。
          </p>
          <p>
            道中でまた一人の山人と出会いました。その山人は大師にこう言いました。
            「ここから南に行くと平原の沢がある。そこがそなたの求める地だ。
            ……じつは、私はこの山の王なのだ。あなたに私の領地を差し上げよう」
          </p>
          <p>
            さらに山を分け入ると、大師は8つの峰に囲まれた平原に至りました。
            平原の中の一本の木に三鈷が輝くのを見て、長らく求めた禅定の地がここであることを知って
            大師は感涙にむせんだといいます。
          </p>
          <p>
            大師は山人に「いったいあなたはどなたなのですか」と尋ねました。
            山人は「丹生明神（丹生都比売大神）」と名乗り、白黒2犬を遣わせたのは
            「高野御子大神（狩場明神）」であると名乗られたそうです。～『今昔物語集』より～
          </p>
          <p>
            極楽寺では、動物供養塔＜虹＞の合祀墓とペットと一緒に入るクリスタル墓がございます。<br />
            ぜひご見学にお越しください。→ <Link to="/tombs" className="link-inline">お墓のページ</Link><br />
            ご予約はこちらから → <Link to="/contact" className="link-inline">お問い合わせ</Link>
          </p>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Prayers;

