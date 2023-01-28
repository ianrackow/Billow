/*global chrome*/
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LineItem = styled.div`
  height: 40px;
  font-family: 'Avenir';
  font-size: 26px;
  line-height: 40px;
  margin-top: 15px;
`

const SourceLogo = styled.img`
  width: 44px;
  margin-right: 4px;
  transform: translateY(2px);
`;

const OffsetButton = styled.div`
  margin: 30px auto auto auto;
  width: 300px;
  height: 60px;
  border-radius: 500px;
  background-color: rgba(203, 231, 247, 0.4);
  font-family: 'Bebas Neue', cursive;
  font-size: 40px;
  line-height: 60px;

  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 12px 2px rgb(203, 231, 247);
  }
`;

export default function OrderDetails() {
  const [x, setX] = useState();
  // x is {company: 'Uber', carbon: '1.56', money: '0.78'}
  useEffect(() => {
    // 'sync' can be 'local', depends on your usecase
    chrome.storage.local.get('req', (result) => {
      setX(result.req.data);

      // Move this to if they click to offset (so you can't offset the same email receipt twice)
      chrome.storage.local.get({emailIds: []}, function (result) {
        var emailIds = result.emailIds;

        if (!emailIds.includes(result.req.id)){
            emailIds.push(result.req.id);
            chrome.storage.local.set({emailIds: emailIds});
        }
    });

    })
  }, []);
  if (!x) {
    return null;
  }
  return (
    <Container>
      <LineItem>
        <SourceLogo src="/images/doordash.png" />
        Trip from {x.company}
      </LineItem>
      <LineItem>Miles Traveled</LineItem>
      <LineItem>
        <SourceLogo style={{ transform: 'translateY(4px)'}} src="/images/cloud.svg" />
        Carbon Emissions: {x.carbon} lbs
      </LineItem>
      <OffsetButton>
        Offset for ${x.money}
      </OffsetButton>
    </Container>
  )
}