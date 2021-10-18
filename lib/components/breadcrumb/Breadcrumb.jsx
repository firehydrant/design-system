import React, {useState} from 'react';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Icon, IconButton, IconButtonDropdown, Link, MenuItem } from '../../main';

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
        <BreadcrumbLink href={firstCrumb.url}>
          {firstCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
      </BreadcrumbItem>
      <IconButtonDropdown icon="menu" buttonVariant="tertiary">
        {dropdownOptions.map(option => 
          <MenuItem option={option} />
        )}
      </IconButtonDropdown>
      <BreadcrumbItem>
        <BreadcrumbLink href={penultimateCrumb.url}>
          {penultimateCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={lastCrumb.url} isCurrentPage>
          {lastCrumb.text.replace('_', ' ')} 
        </BreadcrumbLink>
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
                <BreadcrumbLink key={crumbId} isCurrentPage={index === crumbs.ids.length - 1} href={crumbs.breadcrumbs[crumbId].url}>
                  {crumbs.breadcrumbs[crumbId].text.replace('_', ' ')} 
                </BreadcrumbLink>
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
