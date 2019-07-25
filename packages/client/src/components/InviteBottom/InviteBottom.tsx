import React from 'react';
import {
  GettingReady,
  Footer,
  Soon,
  Down,
  Rectangle,
  RectangleDown,
  DaysToGoLive
} from './InviteBottom.styles';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>We're live!</span>;

const InviteBottom = () => {
  const SEPTEMBERRELEASEDAY = process.env.SEPTEMBERRELEASEDAY ? process.env.SEPTEMBERRELEASEDAY : "2019-09-30T00:00:00.753Z";
  const DAYSTOGOLIVE = new Date(SEPTEMBERRELEASEDAY).getTime()- new Date().getTime();
  
  const renderer = ({ days, completed }) => {
    return completed ? <Completionist />: <span>{days}</span>;
  };

  return (
      <Footer>
        <div className="footer">
          <GettingReady as="h1">We are getting ready</GettingReady>

          <Soon>
            <p>
              Soon you will be able to access the market place and start
              investing in the loans that fit your preferences.
            </p>
            <p>We are working to give you an awesome experience and service.</p>
            <p>See you soon.</p>
            <p>
              <strong>Hero Team.</strong>
            </p>
          </Soon>
        </div>
        <div className="visuals">
          <Down>
            <Rectangle>
              <DaysToGoLive as="h1">
                Days to go live
              </DaysToGoLive>
              <RectangleDown>
                <Countdown date={Date.now() + DAYSTOGOLIVE} renderer={renderer} />
              </RectangleDown>
            </Rectangle>
          </Down>
        </div>
      </Footer>
  );
};

export default InviteBottom;
