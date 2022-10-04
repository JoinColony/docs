/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo, useState } from 'react';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

import './styles.css';
import FavoriteIcon from '../svgIcons/FavoriteIcon';
import { sortBy } from '../../utils/jsUtils';
import { NormalizedOptions as Tutorial } from '@iota-wiki/plugin-tutorial';
import { Tag, TagValues, Tags } from '../../utils/tags';

const TagComp = React.forwardRef<HTMLLIElement, Tag>((tag, ref) => (
  <li ref={ref} className='tag' title={tag.description}>
    <span className='text-label'>{tag.label.toLowerCase()}</span>
    <span className='color-label' style={{ backgroundColor: tag.color }} />
  </li>
));
TagComp.displayName = 'TagComponent';

function TutorialCardTag({ tags }: { tags: string[] }) {
  const tagObjects = Tags.filter(({ value }) => tags.includes(value));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagValues.indexOf(tagObject.value),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagComp key={index} {...tagObject} />;
      })}
    </>
  );
}

const TutorialCard = memo(({ tutorial }: { tutorial: Tutorial }) => {
  const tutorialSource = tutorial.source && useBaseUrl(tutorial.source);
  const tutorialRoute = tutorial.route && useBaseUrl(tutorial.route);
  const [hovering, setHovering] = useState(false);

  const handleClick = (event, url) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = url;
  };

  return (
    <li
      key={tutorial.title}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <div
        onClick={(event) => handleClick(event, tutorialRoute)}
        className='card shadow--md tutorial-card'
      >
        <div className='card__image tutorial-card__image-container'>
          <Image
            className='tutorial-card__image'
            img={tutorial.preview}
            alt={tutorial.title}
          />
        </div>
        <div className='card__body'>
          <div className='tutorial-card__header'>
            <h4
              className={clsx(
                'tutorial-card__title',
                hovering && 'tutorial-card__title--hover',
              )}
            >
              {tutorial.title}
            </h4>
            {tutorial.tags.includes('favorite') && (
              <FavoriteIcon svgClass='svg-icon-favorite' size='small' />
            )}
            {tutorial.source && (
              <div
                onClick={(event) => handleClick(event, tutorialSource)}
                className='button button--secondary button--sm tutorial-card__source-button'
              >
                source
              </div>
            )}
          </div>
          <p className='tutorial-card__body'>{tutorial.description}</p>
        </div>
        <ul className='card__footer tutorial-card__footer'>
          <TutorialCardTag tags={tutorial.tags} />
        </ul>
      </div>
    </li>
  );
});
TutorialCard.displayName = 'TutorialCard';

export default TutorialCard;
