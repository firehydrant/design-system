import React from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useStyleConfig,
  IconButton as ChakraIconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { Icon, Link as DSLink, MenuItem } from '../../main';

const ItemLink = ({ crumb, isCurrentPage }) => {
  const styles = useStyleConfig('Link');

  return (
    <BreadcrumbLink
      as={DSLink}
      href={crumb.url}
      isCurrentPage={isCurrentPage}
      size={6}
      __css={styles}
    >
      {crumb.text.replace('_', ' ')}
    </BreadcrumbLink>
  );
};

const BreadcrumbsList = ({ crumbs }) => {
  return (
    <ChakraBreadcrumb
      separator={<Icon name="chevronRight" color="grey.70" />}
      spacing="4px"
    >
      {crumbs.ids.map((crumbId, index) => (
        <BreadcrumbItem key={crumbId}>
          <ItemLink
            crumb={crumbs.breadcrumbs[crumbId]}
            isCurrentPage={index === crumbs.ids.length - 1}
            href={crumbs.breadcrumbs[crumbId].url}
          />
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
};

const BreadcrumbsListWithDropdown = ({ crumbs }) => {
  // Display only first, penultimate, and last breadcrumbs
  const firstCrumb = crumbs.breadcrumbs[crumbs.ids[0]];
  const penultimateCrumb =
    crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 2]];
  const lastCrumb = crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 1]];

  const dropdownItemIds = crumbs.ids.slice(1, -2);
  const dropdownOptions = [];

  dropdownItemIds.map((option) => {
    dropdownOptions.push({
      label: crumbs.breadcrumbs[option].text.replace('_', ' '),
    });
  });

  return (
    <ChakraBreadcrumb
      separator={<Icon name="chevronRight" color="grey.70" />}
      spacing="4px"
    >
      <BreadcrumbItem key={crumbs.ids[0]}>
        <ItemLink crumb={firstCrumb} />
      </BreadcrumbItem>
      <ChakraMenu closeOnBlur preventOverflow>
        <MenuButton
          as={ChakraIconButton}
          icon={<Icon name="menu" />}
          variant="tertiary"
          borderRadius="base"
          alignItems="center"
          m="mg0"
        />
        <MenuList>
          {dropdownOptions.map((option, index) => (
            <MenuItem option={option} key={index} />
          ))}
        </MenuList>
      </ChakraMenu>
      <BreadcrumbSeparator spacing="4px">
        <Icon name="chevronRight" color="grey.70" />
      </BreadcrumbSeparator>
      <BreadcrumbItem key={crumbs.ids[crumbs.ids.length - 2]}>
        <ItemLink crumb={penultimateCrumb} />
      </BreadcrumbItem>
      <BreadcrumbItem key={crumbs.ids[crumbs.ids.length - 1]}>
        <ItemLink crumb={lastCrumb} isCurrentPage />
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  );
};

export function Breadcrumb({ crumbs }) {
  if (crumbs.ids) {
    if (crumbs.ids.length <= 3) {
      return <BreadcrumbsList crumbs={crumbs} />;
    }
    if (crumbs.ids.length > 3) {
      return <BreadcrumbsListWithDropdown crumbs={crumbs} />;
    }
  }
}
