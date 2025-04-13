const steps = ['Introduced', 'Passed One House', 'Passed Both', 'To President', 'Signed into Law'];
let bills = [
  {
      "bill_id": "example bill",
      "govtrack_url": "apple.com",
      "title": "example bill's name",
      "partySupport": "Democratic",
      "summary": "example bill's summary",
      "currentStep": "Introduced",
      "tags": [
          "Introduced"
      ]
  }
]
    
 ;

export const getBills = () => {
  return bills;
};

export const setBills = (newBills) => {
  bills = newBills;
};

export const getSteps = () => {
  return steps;
};
