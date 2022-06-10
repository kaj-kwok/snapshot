import { MultiSelect } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchTags } from '../../actions/posts';

export const SearchBar = () => {
  const [tagsAvailable, setTagsAvailable] = useState([])
  const [opened, setOpened] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchAllTags() {
      const tags = await dispatch(fetchTags())
      setTagsAvailable(tags);
    }
    fetchAllTags()

  }, [opened])

  return (
    <MultiSelect
      data={tagsAvailable}
      label="All your tags"
      placeholder="Pick your tags"
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
    />
  )
}