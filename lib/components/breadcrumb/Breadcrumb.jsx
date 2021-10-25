import React, { useState } from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Icon, IconButtonDropdown, MenuItem } from '../../main';

const ItemLink = ({crumb, isCurrentPage}) => {
  return (
    <BreadcrumbLink
      as={ChakraLink}
      href={crumb.url}
      isCurrentPage={isCurrentPage}
      size={6}
    >
      {crumb.text.replace('_', ' ')}
    </BreadcrumbLink>
  )
}

const BreadcrumbsListWithDropdown = ({crumbs}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Display only first, penultimate, and last breadcrumbs
  const firstCrumb = crumbs.breadcrumbs[crumbs.ids[0]];
  const penultimateCrumb = crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 2]];
  const lastCrumb = crumbs.breadcrumbs[crumbs.ids[crumbs.ids.length - 1]];

  const dropdownItemIds = crumbs.ids.slice(1, -2);
  const dropdownOptions = [];

  dropdownItemIds.map(option => {
    dropdownOptions.push({label: crumbs.breadcrumbs[option].text.replace('_', ' ')})
  });

  return (
    <>
      <BreadcrumbItem>
        <ItemLink crumb={firstCrumb} />
      </BreadcrumbItem>
      <IconButtonDropdown icon="menu" buttonVariant="tertiary">
        {dropdownOptions.map(option => 
          <MenuItem option={option} />
        )}
      </IconButtonDropdown>
      <BreadcrumbItem>
        <ItemLink crumb={penultimateCrumb} />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <ItemLink crumb={lastCrumb} isCurrentPage />
      </BreadcrumbItem>
    </>
  )
}

export function Breadcrumb({ crumbs }) {
  const renderBreadcrumbsList = (crumbs) => {
    if (crumbs.ids) {
      if (crumbs.ids.length <= 3) {
        return (
          <>
            {crumbs.ids.map((crumbId, index) => (
              <BreadcrumbItem>
                <ItemLink
                  crumb={crumbs.breadcrumbs[crumbId]}
                  isCurrentPage={index === crumbs.ids.length - 1} href={crumbs.breadcrumbs[crumbId].url}
                  key={crumbId}
                />
              </BreadcrumbItem>
            ))}
          </>
        )
      }
      if (crumbs.ids.length > 3) {
        return <BreadcrumbsListWithDropdown crumbs={crumbs} />
      }
    }
  }

  return (
    <ChakraBreadcrumb separator={<Icon name="chevronRight" />} spacing="4px">
      {renderBreadcrumbsList(crumbs)}
    </ChakraBreadcrumb>
  )
}
