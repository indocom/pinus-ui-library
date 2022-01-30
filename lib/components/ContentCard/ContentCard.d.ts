/// <reference types="react" />
import "./contentCard.css";
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
declare const ContentCard: ({ image, imgAlt, title, description, hyperlink, bgImage, }: ContentCardProps) => JSX.Element;
export default ContentCard;
//# sourceMappingURL=ContentCard.d.ts.map