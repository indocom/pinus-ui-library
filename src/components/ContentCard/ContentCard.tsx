import React from "react";
import "./contentCard.css";

// TODO: support variant

export interface ContentCardProps {
  /**
   * Title of ContentCard
   */
  title: string;

  /**
   * Description of ContentCard
   */
  description: string;

  /**
   * Link to full content referenced by ContentCard
   */
  hyperlink: string;

  /**
   * Url to image 
   */
  image?: string;

  /**
   * Alt text for image. Compulsory field if image field is present
   */
  imgAlt?: string;

  /**
   * Url to bgImage 
   */
  bgImage?: string;
}

const ContentCard = ({
  image,
  imgAlt,
  title,
  description,
  hyperlink,
  bgImage = "https://s3-alpha-sig.figma.com/img/aa72/b9ba/53f9dabfd21abc03530e48560fda34ff?Expires=1633305600&Signature=heE79KnIoD2XyIgfEeuRmc8pzNpUksixuPz8P1kOdiRiM-UbZCJdEInLD5GhxHwx8K6rObeWLTrI80v9w-JXhGeuje~jWBwrs4We~Hg4RBJyVvYqU7fh9Tr6r4U2EGsoYoiM1rPDWFaggDOCiHhK1YKhVPTACslKEW4xRST-hj50F64077PGeMMTcqlMSI3vDm4MWmP5Jw16Gm7R3QJlZ4baqP6lwQbCUP-LYnU1VI1ec3NhUVN1MwoOV5PfgDuVffSyuLNPlvuPuULkJW5TKeoWyXKclYFGpQZ8IKoySLlvyIPxxoi8mgkTiVKmoJtqyZzhDYTHp8SLQMO7K7zXkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}: ContentCardProps) => {
  return (
    <div
    className={'contentCard'}
    style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className={'image'}>
      {
        image
        ? <img src={image} alt={imgAlt}/>
        : <></>
      }
      </div>
      <div className={'title'}>
        {title}
      </div>
      <div className={'description'}>
        {description}
      </div>
      <div className={'hyperlink'}>
        <a href={hyperlink}>{"Read More >>>"}</a>
      </div>
    </div>
  )
}

export default ContentCard;