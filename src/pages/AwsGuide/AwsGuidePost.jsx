import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.section`
  & h1{
    font-size: 3rem;
    font-family: Oswald;
    font-weight: 400;
    color: #FF9900;
    -webkit-text-stroke: 1px black;
  }
`;

const GuideContainer = styled.section`
  max-width: 940px;
  background-color: rgb(234, 237, 237);
  margin: 20px auto;
  padding: 30px;
  text-align: left;
  color: black;
  border: 3px solid #FF9900;
  border-radius: 3px;

  & h1, h2 {
    text-align: center;
    font-size: 2rem;
  }

  & h1, h2, h3, h4, h5, h6{
    font-family: Oswald;
    font-weight: 400;
  }

  & a{
    color: black;
    text-decoration: underline;
    font-weight: bold;
  }

  & p, ul, dl, ol {
    color: black;
    margin: 0 30px;
  }
`;

const AwsGuidePost = (props) => {
  // props.guide will provide the path to the html?
  console.log(props.match.params.guide)
  return (
    <PageContainer>
    <h1>Amazon Web Service Guide</h1>
    <GuideContainer>
      <div>
  <h2>AWS Service: EC2 - Elastic Cloud Compute</h2>
  <p>
    EC2 is the AWS version of a compute server. The concept of EC2 is simply to provide a virtual server on AWS where
    you can run applications as needed.
  </p>
  <p>
    EC2 instances are limited to a single region AND a single availability zone (AZ).
  </p>
  <h3>Supported Operating Systems (Amazon Machine Image - AMI)</h3>
  <ul>
    <li>Amazon Linux</li>
    <li>Microsoft Server 2012</li>
    <li>CentOs 6.5</li>
    <li>Debian 7.4</li>
  </ul>

  <h3>Scaling</h3>
  <p>
    EC2 can be scaled vertically (more instances) but not horizontally as you cannot add compute power while the server
    is in use.
  </p>

  <h3>Instance Types</h3>
  <dl>
    <dt>T - Turbo</dt>
    <dd>Variable work load, get credits for what is not used</dd>

    <dt>M - Medium</dt>
    <dd>General Purpose</dd>

    <dt>X</dt>
    <dd>Memory Optimized</dd>

    <dt>H</dt>
    <dd>Storage Optimized</dd>

    <dt>P, G, and F</dt>
    <dd>MUCH larger computing</dd>
  </dl>

  <h3>Pricing Types</h3>
  <h4>
    <a target="_blank" href="https://aws.amazon.com/ec2/pricing/on-demand/">
      On Demand
    </a>
  </h4>
  <p>
    On demand pricing is essentially pay-as-you-go. This is the most expensive method of hosting an EC2 instance. You
    pay per hour
    of use, with no commitment or up front payment.
  </p>
  <h4>
    Reserved
  </h4>
  <p>
    Buy a contract for a given amount of time and save on the total cost.
  </p>
  <h4>
    <a target="_blank"
      href="https://aws.amazon.com/ec2/spot/?cards.sort-by=item.additionalFields.startDateTime&cards.sort-order=asc">
      Spot Instance
    </a>
  </h4>
  <p>
    A Spot Instance is using extra, unused compute power from on-demand or reserved EC2 instances others have purchased,
    for a discount of up to 90% off compared to On-Demand
    pricing.
  </p>
  <p>
    Spot instances are good for large compute needs, such as big data processing. Due to fluctuation in price and
    availability,
    applications using Spot Instances need to have the ability to be interrupted. Additionally, they should have
    flexible
    start and end times as it is difficult to determine when Spot Instances will be available.
  </p>
  <p>
    You are given a 2 minute warning for when the spot instance will be taken down. Spot Blocks can guarantee a block of
    6 hours.
  </p>

  <h4>
    <a target="_blank" href="https://aws.amazon.com/savingsplans/">
      Savings Plans
    </a>
  </h4>
  <p>
    You can set up a savings plan by committing to a specified number of time with EC2 and other services to save money!
  </p>

  <h4>
    <a target="_blank" href="https://aws.amazon.com/ec2/dedicated-hosts/">
      Dedicated Hosts
    </a>
  </h4>
  <p>
    A Dedicated Host is a given, physical server dedicated entirely for your use. This is ideal for using software
    licenses that are attached to physical computers, such as Oracle or Microsoft.
  </p>

  <h3>Keywords</h3>
  <dl>
    <dt>Instance</dt>
    <dd>A specific virtual server</dd>

    <dt>AMI - Amazon Machine Image</dt>
    <dd>An image of an operating system, established by Amazon, to be loaded on an EC2 instance</dd>
  </dl>
</div>
    </GuideContainer>
    </PageContainer>
  )
}

export default AwsGuidePost;