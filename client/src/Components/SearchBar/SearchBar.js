import { MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchTags, searchByTag } from '../../actions/posts';
import { Hash } from 'tabler-icons-react';

export const SearchBar = () => {
  const [tagsAvailable, setTagsAvailable] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const [opened, setOpened] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchAllTags() {
      const tags = await dispatch(fetchTags())
      setTagsAvailable(tags);
    }
    fetchAllTags()

  }, [opened])

  useEffect(() => {
    const searchPostsByTag = (searchTerm) => {
      dispatch(searchByTag(searchTerm.join(',')))
    }
    searchPostsByTag(searchTerm)
  }, [searchTerm])

  return (
    <MultiSelect
      icon={<Hash />}
      data={tagsAvailable}
      // label="All your tags"
      placeholder="Pick your tags"
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
      searchable={true}
      clearable={true}
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
      radius="xl"
      onChange={(e) => setSearchTerm(e)}
    />
  )
}