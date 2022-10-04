import React, { useState, useRef, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { useCollapsible, Collapsible } from '@docusaurus/theme-common';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem, { type LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type {
  DesktopOrMobileNavBarItemProps,
  Props as DropdownNavbarItemProps,
} from '@theme/NavbarItem/DropdownNavbarItem';
import './styles.css';

import { IotaCore, Shimmer, Next } from '../../icons';

interface NetworkDropdownItem {
  label: string;
  routeBasePath: string;
}

interface NetworkDropdownProps extends DropdownNavbarItemProps {
  label: string;
  items: NetworkDropdownItem[];
}

function NetworkDropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        'navbar__item',
        'dropdown',
        'dropdown--hoverable',
        'network-dropdown',
        {
          'dropdown--right': position === 'right',
          'dropdown--show': showDropdown,
        },
      )}
    >
      <NavbarNavLink
        aria-haspopup='true'
        aria-expanded={showDropdown}
        role='button'
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul className='dropdown__menu'>
        {items.map((childItemProps, i) => (
          <NavbarItem
            isDropdownItem
            onKeyDown={(e) => {
              if (i === items.length - 1 && e.key === 'Tab') {
                e.preventDefault();
                setShowDropdown(false);
                const nextNavbarItem = dropdownRef.current!.nextElementSibling;
                if (nextNavbarItem) {
                  const targetItem =
                    nextNavbarItem instanceof HTMLAnchorElement
                      ? nextNavbarItem
                      : // Next item is another dropdown; focus on the inner
                        // anchor element instead so there's outline
                        nextNavbarItem.querySelector('a')!;
                  targetItem.focus();
                }
              }
            }}
            activeClassName='dropdown__link--active'
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

function NetworkDropdownNavbarItemMobile({
  items,
  className,
  position, // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const { collapsed, toggleCollapsed } = useCollapsible({
    initialState: () => true,
  });

  return (
    <li
      className={clsx('menu__list-item', 'network-dropdown', {
        'menu__list-item--collapsed': collapsed,
      })}
    >
      <NavbarNavLink
        role='button'
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className,
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as='ul' className='menu__list' collapsed={collapsed}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName='menu__link--active'
            {...childItemProps}
            key={i}
          />
        ))}
      </Collapsible>
    </li>
  );
}

export default function NetworkDropdownNavbarItem({
  mobile = false,
  items,
  ...props
}: NetworkDropdownProps): JSX.Element {
  const { pathname } = useLocation();
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const basePathToIcon = {
    '/': IotaCore,
    '/shimmer/': Shimmer,
    '/next/': Next,
  };

  const subpath = pathname.substring(baseUrl.length);

  const htmlItems = items.map<LinkLikeNavbarItemProps>((value) => {
    const Icon = basePathToIcon[value.routeBasePath];

    return {
      type: 'html',
      value: renderToString(
        <a
          className='dropdown__link network-dropdown__link'
          href={value.routeBasePath + subpath}
        >
          <Icon className='network-dropdown__icon' />
          {value.label}
        </a>,
      ),
    };
  });

  const Comp = mobile
    ? NetworkDropdownNavbarItemMobile
    : NetworkDropdownNavbarItemDesktop;
  return <Comp items={htmlItems} {...props} />;
}
